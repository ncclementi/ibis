window.BENCHMARK_DATA = {
  "lastUpdate": 1680169678820,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "33db37e7e4974ea3563e879de6dcffa24e48b8fe",
          "message": "chore(deps): update trinodb/trino docker tag to v411",
          "timestamp": "2023-03-30T05:41:04-04:00",
          "tree_id": "c19823e8a2f3120fb0021ad27def562291357c71",
          "url": "https://github.com/ibis-project/ibis/commit/33db37e7e4974ea3563e879de6dcffa24e48b8fe"
        },
        "date": 1680169584659,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1535382.655243019,
            "unit": "iter/sec",
            "range": "stddev: 9.512817380817364e-8",
            "extra": "mean: 651.3034366939105 nsec\nrounds: 84034"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7283243472231111,
            "unit": "iter/sec",
            "range": "stddev: 0.002568366373516271",
            "extra": "mean: 1.373014651799997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5049584.800758953,
            "unit": "iter/sec",
            "range": "stddev: 1.6051551722142306e-8",
            "extra": "mean: 198.03608404579282 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 54.70535255264134,
            "unit": "iter/sec",
            "range": "stddev: 0.00013097691282676623",
            "extra": "mean: 18.27974692307722 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 277.7782655593096,
            "unit": "iter/sec",
            "range": "stddev: 0.00020064086992909675",
            "extra": "mean: 3.5999936783624484 msec\nrounds: 171"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 65.4242957232417,
            "unit": "iter/sec",
            "range": "stddev: 0.00016406916012071294",
            "extra": "mean: 15.28484164705734 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1611767.6998872017,
            "unit": "iter/sec",
            "range": "stddev: 1.4363496881440338e-7",
            "extra": "mean: 620.4368036845411 nsec\nrounds: 156251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 264.82409931819694,
            "unit": "iter/sec",
            "range": "stddev: 0.00022510200719247893",
            "extra": "mean: 3.7760913850912763 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 262.0172903330702,
            "unit": "iter/sec",
            "range": "stddev: 0.00020943427411589173",
            "extra": "mean: 3.816542025638169 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1576823.8778866562,
            "unit": "iter/sec",
            "range": "stddev: 1.0660242093126249e-7",
            "extra": "mean: 634.1862360305283 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 239.92107816458997,
            "unit": "iter/sec",
            "range": "stddev: 0.0001561993795591238",
            "extra": "mean: 4.168037288136821 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 8.996274471811255,
            "unit": "iter/sec",
            "range": "stddev: 0.0005601337015158034",
            "extra": "mean: 111.15712433334262 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 103.17996873351241,
            "unit": "iter/sec",
            "range": "stddev: 0.0006874023864863833",
            "extra": "mean: 9.691803673470238 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4376.911043267288,
            "unit": "iter/sec",
            "range": "stddev: 0.00006687998674404751",
            "extra": "mean: 228.47162990397845 usec\nrounds: 2702"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.815505405018319,
            "unit": "iter/sec",
            "range": "stddev: 0.0003081583539802631",
            "extra": "mean: 207.66252259999192 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10385.830132053108,
            "unit": "iter/sec",
            "range": "stddev: 0.000019998912408691197",
            "extra": "mean: 96.28503328913165 usec\nrounds: 3785"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 460.7859961411414,
            "unit": "iter/sec",
            "range": "stddev: 0.000027448661947023652",
            "extra": "mean: 2.1702048421056923 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1639260.432611294,
            "unit": "iter/sec",
            "range": "stddev: 2.495902345111697e-7",
            "extra": "mean: 610.0311946205089 nsec\nrounds: 138870"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5871047108583548,
            "unit": "iter/sec",
            "range": "stddev: 0.005273118833336514",
            "extra": "mean: 1.7032736776000093 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 244.3826399846409,
            "unit": "iter/sec",
            "range": "stddev: 0.00028418151232389256",
            "extra": "mean: 4.091943683327297 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 4614.264777600316,
            "unit": "iter/sec",
            "range": "stddev: 0.00005792843306422279",
            "extra": "mean: 216.71924958759251 usec\nrounds: 2428"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.734958319730217,
            "unit": "iter/sec",
            "range": "stddev: 0.0034425851804960705",
            "extra": "mean: 1.3606213756000103 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 55.89388518380306,
            "unit": "iter/sec",
            "range": "stddev: 0.0005155958208694005",
            "extra": "mean: 17.891044730771018 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 139.06042366714203,
            "unit": "iter/sec",
            "range": "stddev: 0.0002007784330027174",
            "extra": "mean: 7.19111860606452 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 89.33028510987057,
            "unit": "iter/sec",
            "range": "stddev: 0.0005836796239544964",
            "extra": "mean: 11.19441182539677 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3056.5712166735234,
            "unit": "iter/sec",
            "range": "stddev: 0.003946138786441195",
            "extra": "mean: 327.1639785603632 usec\nrounds: 1306"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 103.16233674216497,
            "unit": "iter/sec",
            "range": "stddev: 0.0006153690687225984",
            "extra": "mean: 9.693460148147997 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.859284365237244,
            "unit": "iter/sec",
            "range": "stddev: 0.0005107864094478004",
            "extra": "mean: 26.413600171434027 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 293.5217459357756,
            "unit": "iter/sec",
            "range": "stddev: 0.0000145074803605546",
            "extra": "mean: 3.4069026020947915 msec\nrounds: 191"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 251.89453620592894,
            "unit": "iter/sec",
            "range": "stddev: 0.00008740359572393946",
            "extra": "mean: 3.969915406114563 msec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1530.488607633159,
            "unit": "iter/sec",
            "range": "stddev: 0.000007413725469415235",
            "extra": "mean: 653.3861114761652 usec\nrounds: 1220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 77.41508317945562,
            "unit": "iter/sec",
            "range": "stddev: 0.020963459261449133",
            "extra": "mean: 12.917379390808168 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1012.7234887903626,
            "unit": "iter/sec",
            "range": "stddev: 0.000015967391058617154",
            "extra": "mean: 987.4363644852752 usec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.638451935753363,
            "unit": "iter/sec",
            "range": "stddev: 0.00024769493112856316",
            "extra": "mean: 73.32210464286553 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 98.50203259662453,
            "unit": "iter/sec",
            "range": "stddev: 0.0006869636051306597",
            "extra": "mean: 10.152074770833389 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4675.194270152956,
            "unit": "iter/sec",
            "range": "stddev: 0.00011163319063652322",
            "extra": "mean: 213.8948548906575 usec\nrounds: 317"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4563.591021559935,
            "unit": "iter/sec",
            "range": "stddev: 0.000057197763048080255",
            "extra": "mean: 219.12568310255332 usec\nrounds: 1805"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 49.564849873466365,
            "unit": "iter/sec",
            "range": "stddev: 0.0005165945998948809",
            "extra": "mean: 20.17558819511994 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 276.7867699437831,
            "unit": "iter/sec",
            "range": "stddev: 0.00021527422703141824",
            "extra": "mean: 3.6128894462806347 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 12137.720491319693,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019855362658159456",
            "extra": "mean: 82.38779272559056 usec\nrounds: 6378"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 103.04001989329288,
            "unit": "iter/sec",
            "range": "stddev: 0.0007282262377838958",
            "extra": "mean: 9.704967070421658 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 86.86254660876052,
            "unit": "iter/sec",
            "range": "stddev: 0.017130130604800006",
            "extra": "mean: 11.512441656864167 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 88.95683861076095,
            "unit": "iter/sec",
            "range": "stddev: 0.0007589417657948407",
            "extra": "mean: 11.241406682352936 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 118708.54425383359,
            "unit": "iter/sec",
            "range": "stddev: 8.876087304075853e-7",
            "extra": "mean: 8.42399345628995 usec\nrounds: 37593"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 270.186368525852,
            "unit": "iter/sec",
            "range": "stddev: 0.0003367678320150811",
            "extra": "mean: 3.701148971563745 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4603731.319973184,
            "unit": "iter/sec",
            "range": "stddev: 1.5766023520249576e-8",
            "extra": "mean: 217.21510889718454 nsec\nrounds: 199961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 62032.51044396454,
            "unit": "iter/sec",
            "range": "stddev: 8.880799898234514e-7",
            "extra": "mean: 16.120579238902867 usec\nrounds: 11377"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 96.26958041805031,
            "unit": "iter/sec",
            "range": "stddev: 0.0007922799612069583",
            "extra": "mean: 10.38749723077117 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.4719660270994857,
            "unit": "iter/sec",
            "range": "stddev: 0.0023660785931165435",
            "extra": "mean: 679.3635053999878 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 102.4618823866529,
            "unit": "iter/sec",
            "range": "stddev: 0.000739009499243547",
            "extra": "mean: 9.759727000001554 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 180.8888915695793,
            "unit": "iter/sec",
            "range": "stddev: 0.004531086142937163",
            "extra": "mean: 5.528255446329317 msec\nrounds: 177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 169.1025376947666,
            "unit": "iter/sec",
            "range": "stddev: 0.00010151302253196363",
            "extra": "mean: 5.913571810524924 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4377.12561091348,
            "unit": "iter/sec",
            "range": "stddev: 0.00006149125521522421",
            "extra": "mean: 228.46043017515916 usec\nrounds: 2048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 68.43621680580384,
            "unit": "iter/sec",
            "range": "stddev: 0.024139182386159218",
            "extra": "mean: 14.612146121952104 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 94.62338134536829,
            "unit": "iter/sec",
            "range": "stddev: 0.00029902848987939005",
            "extra": "mean: 10.568212483868807 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 118.10733420796005,
            "unit": "iter/sec",
            "range": "stddev: 0.00004768215559119438",
            "extra": "mean: 8.466874700932868 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.24407997082299,
            "unit": "iter/sec",
            "range": "stddev: 0.0008778944566579485",
            "extra": "mean: 26.84990475757221 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 21.664853270305873,
            "unit": "iter/sec",
            "range": "stddev: 0.0014004991767411828",
            "extra": "mean: 46.15770933332897 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4743.1868052412965,
            "unit": "iter/sec",
            "range": "stddev: 0.00007832527175324729",
            "extra": "mean: 210.82871939494015 usec\nrounds: 1985"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 91.37982470628425,
            "unit": "iter/sec",
            "range": "stddev: 0.000695462135792171",
            "extra": "mean: 10.943334627903146 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 37.94403694471781,
            "unit": "iter/sec",
            "range": "stddev: 0.0007162514200594458",
            "extra": "mean: 26.354602212119392 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 441623.25419660483,
            "unit": "iter/sec",
            "range": "stddev: 3.4970744065877824e-7",
            "extra": "mean: 2.2643735140695584 usec\nrounds: 1767"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 269.40436848295485,
            "unit": "iter/sec",
            "range": "stddev: 0.00022485236727860623",
            "extra": "mean: 3.711892296443106 msec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 81.0170399945101,
            "unit": "iter/sec",
            "range": "stddev: 0.0007171767560196776",
            "extra": "mean: 12.343082394367434 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 86.1519152905928,
            "unit": "iter/sec",
            "range": "stddev: 0.01885462296130784",
            "extra": "mean: 11.60740300000264 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7200.328474405942,
            "unit": "iter/sec",
            "range": "stddev: 0.00002111604086189304",
            "extra": "mean: 138.8825528661044 usec\nrounds: 3925"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4830.848774661436,
            "unit": "iter/sec",
            "range": "stddev: 0.00005781003957622854",
            "extra": "mean: 207.00296089688374 usec\nrounds: 1560"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14164023613874474,
            "unit": "iter/sec",
            "range": "stddev: 0.14685700166521798",
            "extra": "mean: 7.060140728799991 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 83.6981219201488,
            "unit": "iter/sec",
            "range": "stddev: 0.0002626001274244815",
            "extra": "mean: 11.947699387496868 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 137.59750673431716,
            "unit": "iter/sec",
            "range": "stddev: 0.004540229771963504",
            "extra": "mean: 7.26757354645146 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 8628773.665395126,
            "unit": "iter/sec",
            "range": "stddev: 1.3215667892552985e-8",
            "extra": "mean: 115.8913234693644 nsec\nrounds: 83334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5694327.529677523,
            "unit": "iter/sec",
            "range": "stddev: 1.2124213374515259e-8",
            "extra": "mean: 175.61336168108718 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11071.306422052414,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018732646799740805",
            "extra": "mean: 90.32357717135777 usec\nrounds: 4503"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 201.0050561446539,
            "unit": "iter/sec",
            "range": "stddev: 0.01587982253511402",
            "extra": "mean: 4.974999232259843 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 654220.3379328548,
            "unit": "iter/sec",
            "range": "stddev: 1.1708617586034844e-7",
            "extra": "mean: 1.528537011184501 usec\nrounds: 22223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 92.7738316865827,
            "unit": "iter/sec",
            "range": "stddev: 0.0008220784924289003",
            "extra": "mean: 10.778901569769095 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.1627083991760916,
            "unit": "iter/sec",
            "range": "stddev: 0.001792946198140604",
            "extra": "mean: 462.38318599999957 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 39.27002841542051,
            "unit": "iter/sec",
            "range": "stddev: 0.00044965055877252007",
            "extra": "mean: 25.46471292104594 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 637.944018039646,
            "unit": "iter/sec",
            "range": "stddev: 0.000017129798252382653",
            "extra": "mean: 1.5675356641369955 msec\nrounds: 527"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 4590.796912960124,
            "unit": "iter/sec",
            "range": "stddev: 0.000060310335862392006",
            "extra": "mean: 217.82710474012336 usec\nrounds: 2215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 573.783781398875,
            "unit": "iter/sec",
            "range": "stddev: 0.000037604750669664566",
            "extra": "mean: 1.742816775967451 msec\nrounds: 491"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 131.92450143454192,
            "unit": "iter/sec",
            "range": "stddev: 0.0001512076234747466",
            "extra": "mean: 7.5800930769192885 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 78.50931375788004,
            "unit": "iter/sec",
            "range": "stddev: 0.00026962652512234423",
            "extra": "mean: 12.737342260868116 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 92.29812111492349,
            "unit": "iter/sec",
            "range": "stddev: 0.0007436725773369311",
            "extra": "mean: 10.83445673563459 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.704902471498599,
            "unit": "iter/sec",
            "range": "stddev: 0.004306286169743159",
            "extra": "mean: 1.4186359679999896 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 137.322711556719,
            "unit": "iter/sec",
            "range": "stddev: 0.0002769024204066117",
            "extra": "mean: 7.282116619048595 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 102.43200172408206,
            "unit": "iter/sec",
            "range": "stddev: 0.00006851530497072949",
            "extra": "mean: 9.762574031245327 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 87.64289928232733,
            "unit": "iter/sec",
            "range": "stddev: 0.0008469965853743854",
            "extra": "mean: 11.409937464285187 msec\nrounds: 84"
          }
        ]
      }
    ]
  }
}