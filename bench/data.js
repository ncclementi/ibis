window.BENCHMARK_DATA = {
  "lastUpdate": 1680914322032,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "09df566510fec187473c569b1ed5d70ce3c2361a",
          "message": "chore(flake/nixpkgs): `e3350689` -> `cd07e025`",
          "timestamp": "2023-04-08T00:33:44Z",
          "tree_id": "bb7cbe399bb229486465ef0528d9a43ac51d2d77",
          "url": "https://github.com/ibis-project/ibis/commit/09df566510fec187473c569b1ed5d70ce3c2361a"
        },
        "date": 1680914244032,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 88.02381891883644,
            "unit": "iter/sec",
            "range": "stddev: 0.008132128584709818",
            "extra": "mean: 11.360561405794762 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 39.62899175440089,
            "unit": "iter/sec",
            "range": "stddev: 0.014536411510523196",
            "extra": "mean: 25.234051025003623 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8869855396546369,
            "unit": "iter/sec",
            "range": "stddev: 0.009722475848984486",
            "extra": "mean: 1.1274140955999883 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 91.79098768421268,
            "unit": "iter/sec",
            "range": "stddev: 0.008249339499561506",
            "extra": "mean: 10.894315719101822 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 93.17573812623472,
            "unit": "iter/sec",
            "range": "stddev: 0.0002291148000130957",
            "extra": "mean: 10.732407599982707 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 100.75602918699903,
            "unit": "iter/sec",
            "range": "stddev: 0.0007382249851629587",
            "extra": "mean: 9.92496437254431 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 277.2970878348313,
            "unit": "iter/sec",
            "range": "stddev: 0.0003060946145224679",
            "extra": "mean: 3.6062405408153366 msec\nrounds: 196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6138888.518886728,
            "unit": "iter/sec",
            "range": "stddev: 8.916299893058098e-9",
            "extra": "mean: 162.89593741959152 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.4605548101603074,
            "unit": "iter/sec",
            "range": "stddev: 0.004227065260730906",
            "extra": "mean: 406.41240579999476 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2097.809902603123,
            "unit": "iter/sec",
            "range": "stddev: 0.00010972030277502985",
            "extra": "mean: 476.6876153836072 usec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 281.0765038811572,
            "unit": "iter/sec",
            "range": "stddev: 0.0003050268274729009",
            "extra": "mean: 3.5577502430541585 msec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.81517018971329,
            "unit": "iter/sec",
            "range": "stddev: 0.0002536132947031719",
            "extra": "mean: 10.018517206346031 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 329341.31673946185,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032754458389102572",
            "extra": "mean: 3.0363636421332725 usec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 119.95537929061123,
            "unit": "iter/sec",
            "range": "stddev: 0.00010555302680372529",
            "extra": "mean: 8.336433146339681 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 745065.6629421689,
            "unit": "iter/sec",
            "range": "stddev: 3.267743098006739e-7",
            "extra": "mean: 1.342163583342612 usec\nrounds: 17514"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 273.00224193902204,
            "unit": "iter/sec",
            "range": "stddev: 0.00025935907691428616",
            "extra": "mean: 3.6629735818190117 msec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 83.73758261928167,
            "unit": "iter/sec",
            "range": "stddev: 0.013140126955888487",
            "extra": "mean: 11.942069125001668 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 165.8294678191791,
            "unit": "iter/sec",
            "range": "stddev: 0.00007112491025428161",
            "extra": "mean: 6.03029131764689 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 224.78076279948795,
            "unit": "iter/sec",
            "range": "stddev: 0.00421228466037036",
            "extra": "mean: 4.448779279622046 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5435911.40293691,
            "unit": "iter/sec",
            "range": "stddev: 2.2822177944730086e-8",
            "extra": "mean: 183.96179147800743 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8936888438469018,
            "unit": "iter/sec",
            "range": "stddev: 0.007893769456528655",
            "extra": "mean: 1.1189576852000074 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 529.6702489916944,
            "unit": "iter/sec",
            "range": "stddev: 0.0000665175263821805",
            "extra": "mean: 1.8879670925517298 msec\nrounds: 443"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 137.83457946175102,
            "unit": "iter/sec",
            "range": "stddev: 0.000042731410432078245",
            "extra": "mean: 7.255073464910155 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 109.16982895273176,
            "unit": "iter/sec",
            "range": "stddev: 0.00026680173748315",
            "extra": "mean: 9.160039999998341 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 233.60477609055977,
            "unit": "iter/sec",
            "range": "stddev: 0.009558700564400424",
            "extra": "mean: 4.280734395654384 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 686.525719333075,
            "unit": "iter/sec",
            "range": "stddev: 0.00004740575776636142",
            "extra": "mean: 1.456609667838008 msec\nrounds: 569"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.605852675414194,
            "unit": "iter/sec",
            "range": "stddev: 0.0001238604013805404",
            "extra": "mean: 64.07852366666398 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7901589451890694,
            "unit": "iter/sec",
            "range": "stddev: 0.0034596157816352262",
            "extra": "mean: 1.265568157000007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.57137476333902,
            "unit": "iter/sec",
            "range": "stddev: 0.000122184256182271",
            "extra": "mean: 8.962872440365302 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 100.44156438255555,
            "unit": "iter/sec",
            "range": "stddev: 0.0008168466371779532",
            "extra": "mean: 9.956037683675081 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.8406008813997,
            "unit": "iter/sec",
            "range": "stddev: 0.00013758760397758528",
            "extra": "mean: 6.103493240505607 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 99.75868938677922,
            "unit": "iter/sec",
            "range": "stddev: 0.0009128280112236882",
            "extra": "mean: 10.024189432991163 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 94.83072871916397,
            "unit": "iter/sec",
            "range": "stddev: 0.0007806617451882606",
            "extra": "mean: 10.545105088894186 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11210484.07914794,
            "unit": "iter/sec",
            "range": "stddev: 4.302089908480904e-9",
            "extra": "mean: 89.20221401151213 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 94.40162036360144,
            "unit": "iter/sec",
            "range": "stddev: 0.0008431649316521197",
            "extra": "mean: 10.59303851086831 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2680466.5409631794,
            "unit": "iter/sec",
            "range": "stddev: 1.7213759363806885e-8",
            "extra": "mean: 373.0693835265122 nsec\nrounds: 101011"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 99.86495677063269,
            "unit": "iter/sec",
            "range": "stddev: 0.0007748965958845414",
            "extra": "mean: 10.013522584271223 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 71700.31517045769,
            "unit": "iter/sec",
            "range": "stddev: 6.195299334439494e-7",
            "extra": "mean: 13.946940088375301 usec\nrounds: 4540"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 261.0724886792742,
            "unit": "iter/sec",
            "range": "stddev: 0.00042157676354559004",
            "extra": "mean: 3.830353803492843 msec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.26930811694184,
            "unit": "iter/sec",
            "range": "stddev: 0.00013314189232065888",
            "extra": "mean: 13.46451212963281 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 51.64764807486463,
            "unit": "iter/sec",
            "range": "stddev: 0.00023649262361669237",
            "extra": "mean: 19.361965883721822 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 83.67664356624613,
            "unit": "iter/sec",
            "range": "stddev: 0.018352790359079732",
            "extra": "mean: 11.95076615624894 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7012533.9068991365,
            "unit": "iter/sec",
            "range": "stddev: 4.890297492170795e-9",
            "extra": "mean: 142.60180603417302 nsec\nrounds: 69445"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 56.769157135261736,
            "unit": "iter/sec",
            "range": "stddev: 0.0008348320340349114",
            "extra": "mean: 17.615199000001667 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 198.80448920425172,
            "unit": "iter/sec",
            "range": "stddev: 0.00003038098838689833",
            "extra": "mean: 5.030067499997951 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 44.074914740342045,
            "unit": "iter/sec",
            "range": "stddev: 0.0007606595211874923",
            "extra": "mean: 22.688642868427234 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 294.58699468924954,
            "unit": "iter/sec",
            "range": "stddev: 0.00009362847929833894",
            "extra": "mean: 3.3945829857657777 msec\nrounds: 281"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 60.86860414727337,
            "unit": "iter/sec",
            "range": "stddev: 0.0005183409221836247",
            "extra": "mean: 16.42883082353048 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12167.444571860722,
            "unit": "iter/sec",
            "range": "stddev: 0.000011647603018060909",
            "extra": "mean: 82.18652602804286 usec\nrounds: 3842"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12748.090520941552,
            "unit": "iter/sec",
            "range": "stddev: 0.000002016349979645271",
            "extra": "mean: 78.44312043103862 usec\nrounds: 4733"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17241214817859551,
            "unit": "iter/sec",
            "range": "stddev: 0.09412277016477667",
            "extra": "mean: 5.800055335799982 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1765.041011715055,
            "unit": "iter/sec",
            "range": "stddev: 0.000006847039608009635",
            "extra": "mean: 566.5590733375197 usec\nrounds: 1309"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 97.669032597592,
            "unit": "iter/sec",
            "range": "stddev: 0.000043162583249826905",
            "extra": "mean: 10.238659822915608 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2187.7414384869708,
            "unit": "iter/sec",
            "range": "stddev: 0.00008338088075448085",
            "extra": "mean: 457.092406994674 usec\nrounds: 1258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 95.34904943903793,
            "unit": "iter/sec",
            "range": "stddev: 0.0007977689814755241",
            "extra": "mean: 10.487781534092345 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2163.9940531522084,
            "unit": "iter/sec",
            "range": "stddev: 0.00009115310471737533",
            "extra": "mean: 462.1084787840973 usec\nrounds: 1744"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 45.97582126334242,
            "unit": "iter/sec",
            "range": "stddev: 0.00040431105383741735",
            "extra": "mean: 21.750563068186516 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.486684081484155,
            "unit": "iter/sec",
            "range": "stddev: 0.0002391355036162748",
            "extra": "mean: 95.35902790908453 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1978787.4779072956,
            "unit": "iter/sec",
            "range": "stddev: 1.8511722316125751e-7",
            "extra": "mean: 505.35997986886844 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 159.91816054686936,
            "unit": "iter/sec",
            "range": "stddev: 0.00027577277260186657",
            "extra": "mean: 6.253198489654441 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 147639.59589889605,
            "unit": "iter/sec",
            "range": "stddev: 4.223429367616623e-7",
            "extra": "mean: 6.773250725264802 usec\nrounds: 40323"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 278.16686833520185,
            "unit": "iter/sec",
            "range": "stddev: 0.0002487091549896302",
            "extra": "mean: 3.5949644398158926 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.504229509653616,
            "unit": "iter/sec",
            "range": "stddev: 0.0006450578129001763",
            "extra": "mean: 40.809281499997496 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2127.0280425209266,
            "unit": "iter/sec",
            "range": "stddev: 0.00008650311199949409",
            "extra": "mean: 470.1395468274187 usec\nrounds: 1324"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2245.0949463480188,
            "unit": "iter/sec",
            "range": "stddev: 0.00008020099435881593",
            "extra": "mean: 445.41546076999947 usec\nrounds: 1402"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 301.17693081708785,
            "unit": "iter/sec",
            "range": "stddev: 0.00003363661918151208",
            "extra": "mean: 3.3203074262262287 msec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8484.129933970911,
            "unit": "iter/sec",
            "range": "stddev: 0.000012108573034397465",
            "extra": "mean: 117.8671245941138 usec\nrounds: 3692"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1170.4031615481879,
            "unit": "iter/sec",
            "range": "stddev: 0.000011685665633848622",
            "extra": "mean: 854.4064411764048 usec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 94.9727790297517,
            "unit": "iter/sec",
            "range": "stddev: 0.0008546694693699754",
            "extra": "mean: 10.529332827954148 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1941846.3374481488,
            "unit": "iter/sec",
            "range": "stddev: 8.800051247086867e-8",
            "extra": "mean: 514.9738064826162 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2133.3825068061547,
            "unit": "iter/sec",
            "range": "stddev: 0.00018710911140179632",
            "extra": "mean: 468.7391955308945 usec\nrounds: 358"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 79.31456257408554,
            "unit": "iter/sec",
            "range": "stddev: 0.02139109811105973",
            "extra": "mean: 12.608025153841421 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.610967737689187,
            "unit": "iter/sec",
            "range": "stddev: 0.0001478967572389322",
            "extra": "mean: 178.22237566666863 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2125.366365371407,
            "unit": "iter/sec",
            "range": "stddev: 0.00008389057789244365",
            "extra": "mean: 470.50711646377755 usec\nrounds: 1391"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 99.4928296157194,
            "unit": "iter/sec",
            "range": "stddev: 0.0008473350862329866",
            "extra": "mean: 10.05097557142957 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 739.274370820621,
            "unit": "iter/sec",
            "range": "stddev: 0.00012567401348358221",
            "extra": "mean: 1.3526777600716282 msec\nrounds: 571"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 39.04642389752491,
            "unit": "iter/sec",
            "range": "stddev: 0.0010271377639114844",
            "extra": "mean: 25.610539972224917 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4507.482256902785,
            "unit": "iter/sec",
            "range": "stddev: 0.000023973148936762065",
            "extra": "mean: 221.85334140108796 usec\nrounds: 1983"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 97.07890124313344,
            "unit": "iter/sec",
            "range": "stddev: 0.0008496902564914874",
            "extra": "mean: 10.300899445653044 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 159.94129225528744,
            "unit": "iter/sec",
            "range": "stddev: 0.0038949156076915686",
            "extra": "mean: 6.252294113041603 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13659.153554519682,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024340797269406873",
            "extra": "mean: 73.21097870439488 usec\nrounds: 5682"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 86.3423892840956,
            "unit": "iter/sec",
            "range": "stddev: 0.0008310592565530445",
            "extra": "mean: 11.581796708331323 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 243.00511817681232,
            "unit": "iter/sec",
            "range": "stddev: 0.0005191773995528844",
            "extra": "mean: 4.115139662500411 msec\nrounds: 240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2111.5711314575206,
            "unit": "iter/sec",
            "range": "stddev: 0.0000954234929385597",
            "extra": "mean: 473.5810151513797 usec\nrounds: 1782"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 262.82189545241914,
            "unit": "iter/sec",
            "range": "stddev: 0.000297844726803751",
            "extra": "mean: 3.8048580323896126 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1699714.6757168812,
            "unit": "iter/sec",
            "range": "stddev: 1.0532789915086277e-7",
            "extra": "mean: 588.334038816388 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6796525904942554,
            "unit": "iter/sec",
            "range": "stddev: 0.0025088739359597143",
            "extra": "mean: 595.3612107999902 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6670780748840626,
            "unit": "iter/sec",
            "range": "stddev: 0.09976550672483943",
            "extra": "mean: 1.499074902399991 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}