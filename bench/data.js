window.BENCHMARK_DATA = {
  "lastUpdate": 1677757701187,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "krzysztofwitt93@wp.pl",
            "name": "Krzysztof",
            "username": "krzysztof-kwitt"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "8f49a15e64445ab2f0fb0dececdb5bc38ed06747",
          "message": "chore: enforce raises in xfail tests",
          "timestamp": "2023-03-02T06:40:23-05:00",
          "tree_id": "485e31ee21df7a997d2f4647a2e93147c06641c6",
          "url": "https://github.com/ibis-project/ibis/commit/8f49a15e64445ab2f0fb0dececdb5bc38ed06747"
        },
        "date": 1677757624598,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.039335544176005,
            "unit": "iter/sec",
            "range": "stddev: 0.0005061533321076826",
            "extra": "mean: 39.937161999995396 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7607043643439122,
            "unit": "iter/sec",
            "range": "stddev: 0.0021571342935563544",
            "extra": "mean: 567.9545187999963 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1767235.7232369077,
            "unit": "iter/sec",
            "range": "stddev: 8.445625262863401e-8",
            "extra": "mean: 565.8554695625878 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5188.697559075112,
            "unit": "iter/sec",
            "range": "stddev: 0.000051770891293460126",
            "extra": "mean: 192.72659248581266 usec\nrounds: 692"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.554245578426261,
            "unit": "iter/sec",
            "range": "stddev: 0.0004819857720268596",
            "extra": "mean: 94.74860069999522 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 105.24092047327254,
            "unit": "iter/sec",
            "range": "stddev: 0.0005694519019348679",
            "extra": "mean: 9.502007351351175 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 100.1420103022017,
            "unit": "iter/sec",
            "range": "stddev: 0.00934679490749671",
            "extra": "mean: 9.985819108107263 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 758183.3125767062,
            "unit": "iter/sec",
            "range": "stddev: 2.569094221885705e-7",
            "extra": "mean: 1.3189422444573111 usec\nrounds: 27322"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 62.75553955369661,
            "unit": "iter/sec",
            "range": "stddev: 0.00043551686242462807",
            "extra": "mean: 15.93484825581577 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 134.53159663960227,
            "unit": "iter/sec",
            "range": "stddev: 0.0005783773790978502",
            "extra": "mean: 7.433198036583984 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 317.6037266362952,
            "unit": "iter/sec",
            "range": "stddev: 0.00023364099665105343",
            "extra": "mean: 3.1485776649754262 msec\nrounds: 197"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.634395518276285,
            "unit": "iter/sec",
            "range": "stddev: 0.0001747062180796737",
            "extra": "mean: 177.4813281666686 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6130108.3623222085,
            "unit": "iter/sec",
            "range": "stddev: 9.495968477498993e-9",
            "extra": "mean: 163.12925333324793 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 38.44774656475583,
            "unit": "iter/sec",
            "range": "stddev: 0.00094348859093409",
            "extra": "mean: 26.00932666666808 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5644.292615491939,
            "unit": "iter/sec",
            "range": "stddev: 0.000046139106816538145",
            "extra": "mean: 177.1701199996774 usec\nrounds: 2400"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 290.6640782666153,
            "unit": "iter/sec",
            "range": "stddev: 0.00026328361700425737",
            "extra": "mean: 3.4403976093762 msec\nrounds: 256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 92.85866981778126,
            "unit": "iter/sec",
            "range": "stddev: 0.0007698149658184545",
            "extra": "mean: 10.76905368084987 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 104.1568473817427,
            "unit": "iter/sec",
            "range": "stddev: 0.0006689382428853961",
            "extra": "mean: 9.600905030611427 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 71090.77912723487,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011878657915588948",
            "extra": "mean: 14.06652187916309 usec\nrounds: 11495"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 94.00513244236605,
            "unit": "iter/sec",
            "range": "stddev: 0.00072760975521876",
            "extra": "mean: 10.637717048195148 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.4874208354874963,
            "unit": "iter/sec",
            "range": "stddev: 0.002184242827868895",
            "extra": "mean: 402.0228446000033 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 340.9296620342999,
            "unit": "iter/sec",
            "range": "stddev: 0.000011943795424218114",
            "extra": "mean: 2.9331563409093837 msec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 320.4081193465264,
            "unit": "iter/sec",
            "range": "stddev: 0.00020655527698730148",
            "extra": "mean: 3.1210195360826183 msec\nrounds: 291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5558381.727719427,
            "unit": "iter/sec",
            "range": "stddev: 9.316294792438795e-9",
            "extra": "mean: 179.90847857966435 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 137.70683715902706,
            "unit": "iter/sec",
            "range": "stddev: 0.0001003923187423724",
            "extra": "mean: 7.261803557692468 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 194.78594395457674,
            "unit": "iter/sec",
            "range": "stddev: 0.000021798468921621266",
            "extra": "mean: 5.133840664771971 msec\nrounds: 176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.414291512205743,
            "unit": "iter/sec",
            "range": "stddev: 0.0016153276046455586",
            "extra": "mean: 64.8748597500024 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.99778804114611,
            "unit": "iter/sec",
            "range": "stddev: 0.022410962705467528",
            "extra": "mean: 27.77948464102801 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 139.41734741999315,
            "unit": "iter/sec",
            "range": "stddev: 0.0007177647394630496",
            "extra": "mean: 7.172708551020638 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 493008.33069620153,
            "unit": "iter/sec",
            "range": "stddev: 3.087295064227104e-7",
            "extra": "mean: 2.028363290713263 usec\nrounds: 2103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 106.71668716092756,
            "unit": "iter/sec",
            "range": "stddev: 0.0007619987475069938",
            "extra": "mean: 9.370605728155816 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 139.19028591907352,
            "unit": "iter/sec",
            "range": "stddev: 0.0006896205179124012",
            "extra": "mean: 7.184409410448435 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12685.956356807475,
            "unit": "iter/sec",
            "range": "stddev: 0.000002884295957841711",
            "extra": "mean: 78.82732463157063 usec\nrounds: 5631"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 534.4681216381855,
            "unit": "iter/sec",
            "range": "stddev: 0.00003420276573640427",
            "extra": "mean: 1.8710189803929258 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 305.90929952975165,
            "unit": "iter/sec",
            "range": "stddev: 0.00021996059938882994",
            "extra": "mean: 3.268942792969076 msec\nrounds: 256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 310.7298798892665,
            "unit": "iter/sec",
            "range": "stddev: 0.00021762436187530972",
            "extra": "mean: 3.218229287625528 msec\nrounds: 299"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 142.35240565657554,
            "unit": "iter/sec",
            "range": "stddev: 0.0006428356389313921",
            "extra": "mean: 7.024819815216154 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 168.21431399899026,
            "unit": "iter/sec",
            "range": "stddev: 0.004009492941919481",
            "extra": "mean: 5.944797301887179 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 140.96868460069675,
            "unit": "iter/sec",
            "range": "stddev: 0.0006940593520326291",
            "extra": "mean: 7.0937740735296435 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1767.1449066063135,
            "unit": "iter/sec",
            "range": "stddev: 0.000008356705529562377",
            "extra": "mean: 565.8845498530366 usec\nrounds: 1364"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.39168685618266,
            "unit": "iter/sec",
            "range": "stddev: 0.0003517010219769463",
            "extra": "mean: 21.100747121212493 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 289.476807757503,
            "unit": "iter/sec",
            "range": "stddev: 0.00001861229453080478",
            "extra": "mean: 3.454508178899457 msec\nrounds: 218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5279.771387772215,
            "unit": "iter/sec",
            "range": "stddev: 0.000049746758503809215",
            "extra": "mean: 189.40214008431664 usec\nrounds: 2370"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1921148.2477349646,
            "unit": "iter/sec",
            "range": "stddev: 6.768562368101013e-8",
            "extra": "mean: 520.5220373695787 nsec\nrounds: 105253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5665.876446745956,
            "unit": "iter/sec",
            "range": "stddev: 0.00005185339147668707",
            "extra": "mean: 176.49520059236787 usec\nrounds: 2363"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 158.07024806232874,
            "unit": "iter/sec",
            "range": "stddev: 0.00016620021975842798",
            "extra": "mean: 6.3263011999936225 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 121.1066667395037,
            "unit": "iter/sec",
            "range": "stddev: 0.00005656033679716105",
            "extra": "mean: 8.257183744896272 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 684.1682892776267,
            "unit": "iter/sec",
            "range": "stddev: 0.00004270571617849587",
            "extra": "mean: 1.4616286894206123 msec\nrounds: 586"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 319.82502298900096,
            "unit": "iter/sec",
            "range": "stddev: 0.00018253500392616538",
            "extra": "mean: 3.1267096947395223 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.49451581292351,
            "unit": "iter/sec",
            "range": "stddev: 0.0008936246329518606",
            "extra": "mean: 26.670567103451503 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 754.5459858952222,
            "unit": "iter/sec",
            "range": "stddev: 0.00008748341976228831",
            "extra": "mean: 1.3253002715448308 msec\nrounds: 615"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 61.9600211193833,
            "unit": "iter/sec",
            "range": "stddev: 0.02154181449142273",
            "extra": "mean: 16.13943930188824 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 314.86465740992213,
            "unit": "iter/sec",
            "range": "stddev: 0.00021369938071564068",
            "extra": "mean: 3.1759677577852146 msec\nrounds: 289"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1182.2628491752844,
            "unit": "iter/sec",
            "range": "stddev: 0.000012581470976728765",
            "extra": "mean: 845.8355945952069 usec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 89.39580995001438,
            "unit": "iter/sec",
            "range": "stddev: 0.00023166802994405703",
            "extra": "mean: 11.1862066081078 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8480.983592433213,
            "unit": "iter/sec",
            "range": "stddev: 0.000013305801265142373",
            "extra": "mean: 117.91085186065048 usec\nrounds: 3625"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 136.4226802605867,
            "unit": "iter/sec",
            "range": "stddev: 0.00005123106864003394",
            "extra": "mean: 7.330159458015762 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 141.8293888739567,
            "unit": "iter/sec",
            "range": "stddev: 0.0006376252761278105",
            "extra": "mean: 7.050724874015333 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 108.88150004511338,
            "unit": "iter/sec",
            "range": "stddev: 0.0006725209040026377",
            "extra": "mean: 9.184296685714886 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16912740063154105,
            "unit": "iter/sec",
            "range": "stddev: 0.07286381688240301",
            "extra": "mean: 5.9127024731999995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6825132897117704,
            "unit": "iter/sec",
            "range": "stddev: 0.019707537715739742",
            "extra": "mean: 1.465172935199996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 101.24754479767816,
            "unit": "iter/sec",
            "range": "stddev: 0.00017837346084823165",
            "extra": "mean: 9.876782711109577 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5396.160239178665,
            "unit": "iter/sec",
            "range": "stddev: 0.00004991974051590833",
            "extra": "mean: 185.31695792492022 usec\nrounds: 2448"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2682193.8754880424,
            "unit": "iter/sec",
            "range": "stddev: 1.4789183523468073e-8",
            "extra": "mean: 372.8291266113079 nsec\nrounds: 131579"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5487.448377820132,
            "unit": "iter/sec",
            "range": "stddev: 0.00006671540244535727",
            "extra": "mean: 182.23406055935348 usec\nrounds: 2576"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 241.62319235708082,
            "unit": "iter/sec",
            "range": "stddev: 0.003536225255730057",
            "extra": "mean: 4.138675556120285 msec\nrounds: 196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5332.975201364598,
            "unit": "iter/sec",
            "range": "stddev: 0.00005073621171520931",
            "extra": "mean: 187.51259142253664 usec\nrounds: 2565"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6964754.461730237,
            "unit": "iter/sec",
            "range": "stddev: 4.089955424828976e-9",
            "extra": "mean: 143.5800795986199 nsec\nrounds: 59172"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5107.155227871558,
            "unit": "iter/sec",
            "range": "stddev: 0.000042769888167699106",
            "extra": "mean: 195.80372152047488 usec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1945082.7895167044,
            "unit": "iter/sec",
            "range": "stddev: 1.1297087418722145e-7",
            "extra": "mean: 514.116933937023 nsec\nrounds: 158705"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 285.72009393516527,
            "unit": "iter/sec",
            "range": "stddev: 0.00027009630035909583",
            "extra": "mean: 3.4999288507406026 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 142.977334649122,
            "unit": "iter/sec",
            "range": "stddev: 0.0005831821511272398",
            "extra": "mean: 6.994115553028605 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 146806.75885040883,
            "unit": "iter/sec",
            "range": "stddev: 4.98798431687546e-7",
            "extra": "mean: 6.811675482999842 usec\nrounds: 40984"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 131.7881240311294,
            "unit": "iter/sec",
            "range": "stddev: 0.0006849375446946853",
            "extra": "mean: 7.587937132816247 msec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 105.79392174219157,
            "unit": "iter/sec",
            "range": "stddev: 0.0007871655239109202",
            "extra": "mean: 9.4523388823499 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 302.1447826909489,
            "unit": "iter/sec",
            "range": "stddev: 0.0002178051666766267",
            "extra": "mean: 3.3096715789491484 msec\nrounds: 285"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13873.398960677423,
            "unit": "iter/sec",
            "range": "stddev: 0.000001346935081324649",
            "extra": "mean: 72.08038944417203 usec\nrounds: 7200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8352758589452364,
            "unit": "iter/sec",
            "range": "stddev: 0.0050570122347779415",
            "extra": "mean: 1.1972092683999904 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8903470048762587,
            "unit": "iter/sec",
            "range": "stddev: 0.004994694086174992",
            "extra": "mean: 1.1231575942000063 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 158.62868978930348,
            "unit": "iter/sec",
            "range": "stddev: 0.0002217013393378654",
            "extra": "mean: 6.304029878379738 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 54.84111897161143,
            "unit": "iter/sec",
            "range": "stddev: 0.0006375282248070761",
            "extra": "mean: 18.23449299999971 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 197.2242243563413,
            "unit": "iter/sec",
            "range": "stddev: 0.00004843236668607919",
            "extra": "mean: 5.070371062497969 msec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 64.33270304516162,
            "unit": "iter/sec",
            "range": "stddev: 0.0001542468400010793",
            "extra": "mean: 15.544193740747982 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 102.82759982667959,
            "unit": "iter/sec",
            "range": "stddev: 0.000672971542680737",
            "extra": "mean: 9.725015479166524 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5244.844633450559,
            "unit": "iter/sec",
            "range": "stddev: 0.000021421135046594357",
            "extra": "mean: 190.66341710528508 usec\nrounds: 2280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12024548.15233307,
            "unit": "iter/sec",
            "range": "stddev: 3.736904641117301e-9",
            "extra": "mean: 83.16320807492444 nsec\nrounds: 116266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8998053238788766,
            "unit": "iter/sec",
            "range": "stddev: 0.009245092538304476",
            "extra": "mean: 1.111351504000004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12123.482252697178,
            "unit": "iter/sec",
            "range": "stddev: 0.000026549178500078843",
            "extra": "mean: 82.48455181080705 usec\nrounds: 4362"
          }
        ]
      }
    ]
  }
}