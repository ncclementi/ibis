window.BENCHMARK_DATA = {
  "lastUpdate": 1677604624732,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "c4cc2a652b26b7c1263141d545fde56c48bf4c08",
          "message": "feat(druid): add Apache Druid backend",
          "timestamp": "2023-02-28T18:10:02+01:00",
          "tree_id": "d46e6350dffef824ee7cc2845a148365a64a5e91",
          "url": "https://github.com/ibis-project/ibis/commit/c4cc2a652b26b7c1263141d545fde56c48bf4c08"
        },
        "date": 1677604546584,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 148346.19541001142,
            "unit": "iter/sec",
            "range": "stddev: 3.1183562633439387e-7",
            "extra": "mean: 6.740988518351398 usec\nrounds: 18116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 279.66613797621386,
            "unit": "iter/sec",
            "range": "stddev: 0.004945944119755287",
            "extra": "mean: 3.57569209928823 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 710.2112422895491,
            "unit": "iter/sec",
            "range": "stddev: 0.0001748534499077903",
            "extra": "mean: 1.408031780483004 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 309.1964543546022,
            "unit": "iter/sec",
            "range": "stddev: 0.00018519530151540244",
            "extra": "mean: 3.2341897389714216 msec\nrounds: 272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 142.61438419032916,
            "unit": "iter/sec",
            "range": "stddev: 0.0005387436294210425",
            "extra": "mean: 7.011915422678739 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16964964052768894,
            "unit": "iter/sec",
            "range": "stddev: 0.023121533935798248",
            "extra": "mean: 5.8945011429999905 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 541.0222705759057,
            "unit": "iter/sec",
            "range": "stddev: 0.00005219210900739926",
            "extra": "mean: 1.8483527469867793 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8780294893147409,
            "unit": "iter/sec",
            "range": "stddev: 0.00493524636534886",
            "extra": "mean: 1.1389139114000044 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6980835.649140809,
            "unit": "iter/sec",
            "range": "stddev: 4.367088854032513e-9",
            "extra": "mean: 143.2493257627514 nsec\nrounds: 61729"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 282.6230024175728,
            "unit": "iter/sec",
            "range": "stddev: 0.0002644593577320213",
            "extra": "mean: 3.5382824166679447 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 695.5254007897274,
            "unit": "iter/sec",
            "range": "stddev: 0.00004207574209759729",
            "extra": "mean: 1.4377620125225619 msec\nrounds: 559"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 341.8364469235215,
            "unit": "iter/sec",
            "range": "stddev: 0.00001055000177894507",
            "extra": "mean: 2.925375597013879 msec\nrounds: 201"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 43.25546566795408,
            "unit": "iter/sec",
            "range": "stddev: 0.014388868476574597",
            "extra": "mean: 23.118465714284348 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 97.57781906316418,
            "unit": "iter/sec",
            "range": "stddev: 0.00006670270939419778",
            "extra": "mean: 10.248230690139517 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13770.754991612723,
            "unit": "iter/sec",
            "range": "stddev: 0.000001565744240587187",
            "extra": "mean: 72.61765971503121 usec\nrounds: 7576"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 154.92639601878705,
            "unit": "iter/sec",
            "range": "stddev: 0.00014436603048687826",
            "extra": "mean: 6.454677999988689 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.616223601727432,
            "unit": "iter/sec",
            "range": "stddev: 0.0014066000715348642",
            "extra": "mean: 94.19545381818105 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 196.65265853756802,
            "unit": "iter/sec",
            "range": "stddev: 0.000026737436069626838",
            "extra": "mean: 5.085107963638145 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 313.0770622524553,
            "unit": "iter/sec",
            "range": "stddev: 0.00017529105353274204",
            "extra": "mean: 3.1941017741939595 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 103.55273515849188,
            "unit": "iter/sec",
            "range": "stddev: 0.0005909209791072255",
            "extra": "mean: 9.656915372341034 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 134.26030436978772,
            "unit": "iter/sec",
            "range": "stddev: 0.0005487781889613759",
            "extra": "mean: 7.448217883118607 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6187103.5781933945,
            "unit": "iter/sec",
            "range": "stddev: 8.002471121261441e-9",
            "extra": "mean: 161.6265167312899 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1771.2334734855515,
            "unit": "iter/sec",
            "range": "stddev: 0.000009370099803126482",
            "extra": "mean: 564.5783093925688 usec\nrounds: 1267"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 287.4492291488434,
            "unit": "iter/sec",
            "range": "stddev: 0.000022345237433437813",
            "extra": "mean: 3.4788752189771652 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5571.66925237662,
            "unit": "iter/sec",
            "range": "stddev: 0.00007541416514481408",
            "extra": "mean: 179.4794261295115 usec\nrounds: 2457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 105.4831522427134,
            "unit": "iter/sec",
            "range": "stddev: 0.0005882890356017665",
            "extra": "mean: 9.480186918371869 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 141.65775545108878,
            "unit": "iter/sec",
            "range": "stddev: 0.0006030677793784963",
            "extra": "mean: 7.059267576389614 msec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5168.34037634838,
            "unit": "iter/sec",
            "range": "stddev: 0.00003502895996307305",
            "extra": "mean: 193.48570859927307 usec\nrounds: 1407"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 132.86266128669325,
            "unit": "iter/sec",
            "range": "stddev: 0.0005168749261534159",
            "extra": "mean: 7.526569092592412 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.781951296618026,
            "unit": "iter/sec",
            "range": "stddev: 0.000788855140587882",
            "extra": "mean: 26.467664206891108 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4996.329046954045,
            "unit": "iter/sec",
            "range": "stddev: 0.0000633843484049694",
            "extra": "mean: 200.1469460082175 usec\nrounds: 2167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 101.15617972961542,
            "unit": "iter/sec",
            "range": "stddev: 0.00012597150967959145",
            "extra": "mean: 9.885703500003084 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 120.13741551120889,
            "unit": "iter/sec",
            "range": "stddev: 0.00007321518536873338",
            "extra": "mean: 8.32380150467528 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.680356146342159,
            "unit": "iter/sec",
            "range": "stddev: 0.06911366796116648",
            "extra": "mean: 1.4698184258000198 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5228.890875051918,
            "unit": "iter/sec",
            "range": "stddev: 0.00004965838839777669",
            "extra": "mean: 191.2451462261719 usec\nrounds: 2120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 106.68993862914729,
            "unit": "iter/sec",
            "range": "stddev: 0.0006141422511849087",
            "extra": "mean: 9.372955058826923 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2666856.8740847656,
            "unit": "iter/sec",
            "range": "stddev: 1.6981432693168142e-8",
            "extra": "mean: 374.9732539896513 nsec\nrounds: 100000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8380.41157700916,
            "unit": "iter/sec",
            "range": "stddev: 0.000054846164804216785",
            "extra": "mean: 119.32588164803293 usec\nrounds: 3422"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1738462.3929785818,
            "unit": "iter/sec",
            "range": "stddev: 8.647752611032802e-8",
            "extra": "mean: 575.2209561960425 nsec\nrounds: 133316"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5573.475664718281,
            "unit": "iter/sec",
            "range": "stddev: 0.00006927152587326053",
            "extra": "mean: 179.42125527348946 usec\nrounds: 1896"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 90.33503611301543,
            "unit": "iter/sec",
            "range": "stddev: 0.0001606911945753219",
            "extra": "mean: 11.069902033901112 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 39.75640684103028,
            "unit": "iter/sec",
            "range": "stddev: 0.0007554193941414111",
            "extra": "mean: 25.15317855556197 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 106.93432768141103,
            "unit": "iter/sec",
            "range": "stddev: 0.0006992269289923284",
            "extra": "mean: 9.351533989901686 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 92.09704250827254,
            "unit": "iter/sec",
            "range": "stddev: 0.000751848814909996",
            "extra": "mean: 10.858111973684453 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5091.157745946519,
            "unit": "iter/sec",
            "range": "stddev: 0.000056010812536129574",
            "extra": "mean: 196.41897774551978 usec\nrounds: 2696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.04968684989005,
            "unit": "iter/sec",
            "range": "stddev: 0.00023800028816548056",
            "extra": "mean: 13.324505963631012 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 303.6687448901403,
            "unit": "iter/sec",
            "range": "stddev: 0.00023794790382010322",
            "extra": "mean: 3.293061985558556 msec\nrounds: 277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 57.85854219675857,
            "unit": "iter/sec",
            "range": "stddev: 0.0006521820872093963",
            "extra": "mean: 17.283532595745616 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1956441.209430941,
            "unit": "iter/sec",
            "range": "stddev: 1.1248613054744944e-7",
            "extra": "mean: 511.1321491182781 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 299.34444579504066,
            "unit": "iter/sec",
            "range": "stddev: 0.00020544116577742008",
            "extra": "mean: 3.3406332205164544 msec\nrounds: 195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1173.2716740855055,
            "unit": "iter/sec",
            "range": "stddev: 0.000012316110360118061",
            "extra": "mean: 852.3175169804041 usec\nrounds: 265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.42838748438125,
            "unit": "iter/sec",
            "range": "stddev: 0.025291931162412535",
            "extra": "mean: 28.22595300000188 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8894447100828281,
            "unit": "iter/sec",
            "range": "stddev: 0.004011446454273999",
            "extra": "mean: 1.1242969784000139 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.555286107620041,
            "unit": "iter/sec",
            "range": "stddev: 0.0016113376427903876",
            "extra": "mean: 391.34560979998696 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 103.19376190356022,
            "unit": "iter/sec",
            "range": "stddev: 0.000582440193701747",
            "extra": "mean: 9.69050823958284 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 293.58583818133684,
            "unit": "iter/sec",
            "range": "stddev: 0.00008762583182914257",
            "extra": "mean: 3.4061588467436152 msec\nrounds: 261"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 142.02364398352177,
            "unit": "iter/sec",
            "range": "stddev: 0.0005768803164454996",
            "extra": "mean: 7.041081132350221 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 65.14921469691342,
            "unit": "iter/sec",
            "range": "stddev: 0.00010059583350045573",
            "extra": "mean: 15.349379185185743 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12184.928123034371,
            "unit": "iter/sec",
            "range": "stddev: 0.00002474304221055623",
            "extra": "mean: 82.06860064357717 usec\nrounds: 4665"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12805.266624232552,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017254847836967354",
            "extra": "mean: 78.09286829745587 usec\nrounds: 5110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 197.34254663826226,
            "unit": "iter/sec",
            "range": "stddev: 0.00005160756258536175",
            "extra": "mean: 5.067330978722215 msec\nrounds: 188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11464649.13955219,
            "unit": "iter/sec",
            "range": "stddev: 3.314391250239304e-9",
            "extra": "mean: 87.22464925250038 nsec\nrounds: 112360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 161.57024655428157,
            "unit": "iter/sec",
            "range": "stddev: 0.00019187972978232403",
            "extra": "mean: 6.189258364868791 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5554459.544871231,
            "unit": "iter/sec",
            "range": "stddev: 9.833711412582427e-9",
            "extra": "mean: 180.0355177532509 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 58.27355348620662,
            "unit": "iter/sec",
            "range": "stddev: 0.00040808442039030576",
            "extra": "mean: 17.160443119994397 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 140.90085479239312,
            "unit": "iter/sec",
            "range": "stddev: 0.000575573534114031",
            "extra": "mean: 7.097189023256284 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 135.28785103113435,
            "unit": "iter/sec",
            "range": "stddev: 0.00019853865358732554",
            "extra": "mean: 7.391646717559775 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.611956621888082,
            "unit": "iter/sec",
            "range": "stddev: 0.00010233373860393559",
            "extra": "mean: 64.05347031249065 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5569.7728125427575,
            "unit": "iter/sec",
            "range": "stddev: 0.000043914772117450644",
            "extra": "mean: 179.5405366890489 usec\nrounds: 1867"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 143.23185711569792,
            "unit": "iter/sec",
            "range": "stddev: 0.0005337061837792976",
            "extra": "mean: 6.981687036231285 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 107.47291503592723,
            "unit": "iter/sec",
            "range": "stddev: 0.0006243293682799822",
            "extra": "mean: 9.304669922330746 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 285.7859350043326,
            "unit": "iter/sec",
            "range": "stddev: 0.0002994413053825194",
            "extra": "mean: 3.499122516245734 msec\nrounds: 277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 500676.8582167796,
            "unit": "iter/sec",
            "range": "stddev: 3.155590901603369e-7",
            "extra": "mean: 1.997296227274453 usec\nrounds: 2147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2706838.9962883075,
            "unit": "iter/sec",
            "range": "stddev: 1.551068363083945e-8",
            "extra": "mean: 369.4346067023041 nsec\nrounds: 133334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 136.364063027793,
            "unit": "iter/sec",
            "range": "stddev: 0.00013901226735536475",
            "extra": "mean: 7.333310388354922 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7843485052205497,
            "unit": "iter/sec",
            "range": "stddev: 0.00263011539938026",
            "extra": "mean: 560.4286365999997 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8509770239023776,
            "unit": "iter/sec",
            "range": "stddev: 0.004441028037358677",
            "extra": "mean: 1.1751198585999874 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 809672.8575131674,
            "unit": "iter/sec",
            "range": "stddev: 1.857118941787678e-7",
            "extra": "mean: 1.2350667195037317 usec\nrounds: 23981"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.095205673013545,
            "unit": "iter/sec",
            "range": "stddev: 0.0009452949492981818",
            "extra": "mean: 39.84824882608406 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 310.76077749467277,
            "unit": "iter/sec",
            "range": "stddev: 0.00017979921744707558",
            "extra": "mean: 3.217909312950997 msec\nrounds: 278"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.646485029049466,
            "unit": "iter/sec",
            "range": "stddev: 0.0003820074305048279",
            "extra": "mean: 177.10132849999619 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 72779.92743308461,
            "unit": "iter/sec",
            "range": "stddev: 6.599759550297939e-7",
            "extra": "mean: 13.740052171931897 usec\nrounds: 14663"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5221.799259779995,
            "unit": "iter/sec",
            "range": "stddev: 0.00005362226498720345",
            "extra": "mean: 191.5048722194909 usec\nrounds: 2113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 141.07379043232902,
            "unit": "iter/sec",
            "range": "stddev: 0.0005902826734117449",
            "extra": "mean: 7.088488917292436 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 100.68207244631199,
            "unit": "iter/sec",
            "range": "stddev: 0.0006939389379228632",
            "extra": "mean: 9.932254826530741 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5512.9487886908455,
            "unit": "iter/sec",
            "range": "stddev: 0.000056732561786277333",
            "extra": "mean: 181.39112811121703 usec\nrounds: 3536"
          }
        ]
      }
    ]
  }
}