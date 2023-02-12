window.BENCHMARK_DATA = {
  "lastUpdate": 1676209571540,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "70e9b88c80ffb0b78e47010b6c14c4d402c2973c",
          "message": "chore(deps-dev): bump ipython from 8.9.0 to 8.10.0\n\nBumps [ipython](https://github.com/ipython/ipython) from 8.9.0 to 8.10.0.\n- [Release notes](https://github.com/ipython/ipython/releases)\n- [Commits](https://github.com/ipython/ipython/compare/8.9.0...8.10.0)\n\n---\nupdated-dependencies:\n- dependency-name: ipython\n  dependency-type: direct:development\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-02-12T08:39:02-05:00",
          "tree_id": "eaad625a37fa57db271898f0959a96094b08eff1",
          "url": "https://github.com/ibis-project/ibis/commit/70e9b88c80ffb0b78e47010b6c14c4d402c2973c"
        },
        "date": 1676209487406,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7526243353532751,
            "unit": "iter/sec",
            "range": "stddev: 0.002471836926653374",
            "extra": "mean: 1.3286841163999952 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 194.72101210696013,
            "unit": "iter/sec",
            "range": "stddev: 0.0066871552339107295",
            "extra": "mean: 5.135552599997275 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 67.81299649044723,
            "unit": "iter/sec",
            "range": "stddev: 0.00010459022613647025",
            "extra": "mean: 14.746435812504899 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.764991186433772,
            "unit": "iter/sec",
            "range": "stddev: 0.0002793078978346921",
            "extra": "mean: 72.6480668571412 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10686.063058243775,
            "unit": "iter/sec",
            "range": "stddev: 0.00000384867316213054",
            "extra": "mean: 93.57983333521028 usec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5307.430554268722,
            "unit": "iter/sec",
            "range": "stddev: 0.0000482957134001918",
            "extra": "mean: 188.415088954053 usec\nrounds: 2372"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 44.51842054842945,
            "unit": "iter/sec",
            "range": "stddev: 0.0003752515944247236",
            "extra": "mean: 22.462611828560902 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 361382.0643291452,
            "unit": "iter/sec",
            "range": "stddev: 0.000001179591145184713",
            "extra": "mean: 2.7671544847040455 usec\nrounds: 1929"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 93.81010919387155,
            "unit": "iter/sec",
            "range": "stddev: 0.0005302821854670612",
            "extra": "mean: 10.659831958337898 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 418.0150525965168,
            "unit": "iter/sec",
            "range": "stddev: 0.000042471939129247994",
            "extra": "mean: 2.392258350000702 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.2539294712263875,
            "unit": "iter/sec",
            "range": "stddev: 0.002183916617477601",
            "extra": "mean: 443.66960579999386 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1566201.592335871,
            "unit": "iter/sec",
            "range": "stddev: 9.384816169481758e-8",
            "extra": "mean: 638.4874111311403 nsec\nrounds: 136987"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 83.47491333336376,
            "unit": "iter/sec",
            "range": "stddev: 0.000526361643004341",
            "extra": "mean: 11.979647058828558 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 977.4338203120866,
            "unit": "iter/sec",
            "range": "stddev: 0.00007728051550921316",
            "extra": "mean: 1.0230871688895604 msec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 266.46480471208673,
            "unit": "iter/sec",
            "range": "stddev: 0.000013919374312832522",
            "extra": "mean: 3.752840834197569 msec\nrounds: 193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 72.92768822933863,
            "unit": "iter/sec",
            "range": "stddev: 0.00010527815519938687",
            "extra": "mean: 13.71221307406948 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8664984228386428,
            "unit": "iter/sec",
            "range": "stddev: 0.007578300510803657",
            "extra": "mean: 1.1540701906000095 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 225.6708913511796,
            "unit": "iter/sec",
            "range": "stddev: 0.0002927767617015926",
            "extra": "mean: 4.431231666665604 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8689977949287017,
            "unit": "iter/sec",
            "range": "stddev: 0.004691913167056266",
            "extra": "mean: 1.150750906199994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.264448439815574,
            "unit": "iter/sec",
            "range": "stddev: 0.00040006505291872985",
            "extra": "mean: 107.93950730000574 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 6098.863168436093,
            "unit": "iter/sec",
            "range": "stddev: 0.00004653322058486545",
            "extra": "mean: 163.96498369981074 usec\nrounds: 2454"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 66.66036186614762,
            "unit": "iter/sec",
            "range": "stddev: 0.000298289774888212",
            "extra": "mean: 15.001418714287443 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 95.48178251597805,
            "unit": "iter/sec",
            "range": "stddev: 0.00005254283625276892",
            "extra": "mean: 10.473202045978336 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1544574.5096876503,
            "unit": "iter/sec",
            "range": "stddev: 9.453967339209009e-8",
            "extra": "mean: 647.4274913433758 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 143.54038791914223,
            "unit": "iter/sec",
            "range": "stddev: 0.00015894657898949017",
            "extra": "mean: 6.966680350364598 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 564438.3964986198,
            "unit": "iter/sec",
            "range": "stddev: 2.7937345131249895e-7",
            "extra": "mean: 1.7716725265384126 usec\nrounds: 23095"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 249.3339422676614,
            "unit": "iter/sec",
            "range": "stddev: 0.00019542212510668364",
            "extra": "mean: 4.010685392069461 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5924836415393886,
            "unit": "iter/sec",
            "range": "stddev: 0.0012979251804227493",
            "extra": "mean: 1.6878103122000199 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 517.7693662770467,
            "unit": "iter/sec",
            "range": "stddev: 0.000017922155103055113",
            "extra": "mean: 1.9313618478249688 msec\nrounds: 460"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 71.76897590299478,
            "unit": "iter/sec",
            "range": "stddev: 0.016568329825329037",
            "extra": "mean: 13.933597176468444 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5521260.288206817,
            "unit": "iter/sec",
            "range": "stddev: 4.343517776513606e-9",
            "extra": "mean: 181.1180686656281 nsec\nrounds: 55252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 89.34537048558894,
            "unit": "iter/sec",
            "range": "stddev: 0.000653786194294163",
            "extra": "mean: 11.192521722894371 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 623.7918384628936,
            "unit": "iter/sec",
            "range": "stddev: 0.000025520487169895112",
            "extra": "mean: 1.60309888385865 msec\nrounds: 508"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10273.633932344788,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014839368766095525",
            "extra": "mean: 97.33654192716271 usec\nrounds: 5283"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 150.1294839224375,
            "unit": "iter/sec",
            "range": "stddev: 0.0006467901279250439",
            "extra": "mean: 6.660916789114105 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 163.22092072424203,
            "unit": "iter/sec",
            "range": "stddev: 0.0006351061197504629",
            "extra": "mean: 6.126665598765228 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4458563.4897912545,
            "unit": "iter/sec",
            "range": "stddev: 1.0780922895568336e-8",
            "extra": "mean: 224.2874868310078 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 81.78546946127472,
            "unit": "iter/sec",
            "range": "stddev: 0.014811759152161376",
            "extra": "mean: 12.227110837500277 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 101.4195507279414,
            "unit": "iter/sec",
            "range": "stddev: 0.00011956361256915322",
            "extra": "mean: 9.860031846152687 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1513988.7370243385,
            "unit": "iter/sec",
            "range": "stddev: 8.898123653197152e-8",
            "extra": "mean: 660.5068951605579 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 94.28354950179903,
            "unit": "iter/sec",
            "range": "stddev: 0.0007106329432638382",
            "extra": "mean: 10.606304124993926 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 242.6031461028638,
            "unit": "iter/sec",
            "range": "stddev: 0.00022573811887541666",
            "extra": "mean: 4.12195808695737 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.276218491466466,
            "unit": "iter/sec",
            "range": "stddev: 0.000501114580705288",
            "extra": "mean: 26.826755515153103 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11962669.868849471,
            "unit": "iter/sec",
            "range": "stddev: 3.184580628134968e-9",
            "extra": "mean: 83.5933793177109 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 145.11519736794065,
            "unit": "iter/sec",
            "range": "stddev: 0.0006581734046672182",
            "extra": "mean: 6.891077007355009 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5890031165565865,
            "unit": "iter/sec",
            "range": "stddev: 0.0012229346716582212",
            "extra": "mean: 629.3253862000142 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 44.24587289983812,
            "unit": "iter/sec",
            "range": "stddev: 0.0030436151948143183",
            "extra": "mean: 22.600977999999152 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 141.476975986298,
            "unit": "iter/sec",
            "range": "stddev: 0.0118161546480077",
            "extra": "mean: 7.068287917723445 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4502.473762993271,
            "unit": "iter/sec",
            "range": "stddev: 0.00004135062138521047",
            "extra": "mean: 222.1001282048991 usec\nrounds: 1560"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 162.40324500609765,
            "unit": "iter/sec",
            "range": "stddev: 0.0006799382527066754",
            "extra": "mean: 6.157512431247625 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 119208.16181460311,
            "unit": "iter/sec",
            "range": "stddev: 9.5723104856773e-7",
            "extra": "mean: 8.388687358129358 usec\nrounds: 38760"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 103.38760237974519,
            "unit": "iter/sec",
            "range": "stddev: 0.00010642239139047089",
            "extra": "mean: 9.67233959374525 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 89.2187799329116,
            "unit": "iter/sec",
            "range": "stddev: 0.000597903553925697",
            "extra": "mean: 11.208402544306857 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5954.362620566478,
            "unit": "iter/sec",
            "range": "stddev: 0.00005044732824751374",
            "extra": "mean: 167.94408801136527 usec\nrounds: 3545"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5739.8318734814675,
            "unit": "iter/sec",
            "range": "stddev: 0.00004947665605219106",
            "extra": "mean: 174.22113086971916 usec\nrounds: 3599"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 220.06175540636946,
            "unit": "iter/sec",
            "range": "stddev: 0.008736713946500912",
            "extra": "mean: 4.5441789653699 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1595391.9804288826,
            "unit": "iter/sec",
            "range": "stddev: 9.155138532268888e-8",
            "extra": "mean: 626.8052066622362 nsec\nrounds: 129871"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4816770.677236161,
            "unit": "iter/sec",
            "range": "stddev: 4.8713039117272286e-9",
            "extra": "mean: 207.60797368365053 nsec\nrounds: 49020"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.84429921588594,
            "unit": "iter/sec",
            "range": "stddev: 0.00008213910507001434",
            "extra": "mean: 17.287788313724914 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.539544738552962,
            "unit": "iter/sec",
            "range": "stddev: 0.0006826932389712623",
            "extra": "mean: 37.67962147999242 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 275.23900791582656,
            "unit": "iter/sec",
            "range": "stddev: 0.00013112661046126343",
            "extra": "mean: 3.6332059455243333 msec\nrounds: 257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5326.71938207923,
            "unit": "iter/sec",
            "range": "stddev: 0.000045888189896548605",
            "extra": "mean: 187.7328104356908 usec\nrounds: 2089"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 56771.47617320267,
            "unit": "iter/sec",
            "range": "stddev: 0.000001305298801145459",
            "extra": "mean: 17.614479442971067 usec\nrounds: 13718"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 146.06512384462076,
            "unit": "iter/sec",
            "range": "stddev: 0.00007537133560171307",
            "extra": "mean: 6.8462612681160415 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1553912694101797,
            "unit": "iter/sec",
            "range": "stddev: 0.06430708346505103",
            "extra": "mean: 6.435367983000015 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.969217614992933,
            "unit": "iter/sec",
            "range": "stddev: 0.00022286269002676006",
            "extra": "mean: 201.23892280000746 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6040.21504410612,
            "unit": "iter/sec",
            "range": "stddev: 0.00004753259126049275",
            "extra": "mean: 165.55701952627882 usec\nrounds: 2407"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 121.58425663598663,
            "unit": "iter/sec",
            "range": "stddev: 0.00036647947033482795",
            "extra": "mean: 8.224749056071614 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 142.84622841070123,
            "unit": "iter/sec",
            "range": "stddev: 0.00032980280543634346",
            "extra": "mean: 7.000534848738686 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 35.335346284036625,
            "unit": "iter/sec",
            "range": "stddev: 0.0006631209414466952",
            "extra": "mean: 28.300274517240773 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 252.67080707428656,
            "unit": "iter/sec",
            "range": "stddev: 0.00022337815004720338",
            "extra": "mean: 3.957718786666141 msec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 87.57518649046027,
            "unit": "iter/sec",
            "range": "stddev: 0.0004018561554892578",
            "extra": "mean: 11.418759583331653 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 252.24980026830764,
            "unit": "iter/sec",
            "range": "stddev: 0.00010822383500715131",
            "extra": "mean: 3.964324248964088 msec\nrounds: 241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 334.27202062626304,
            "unit": "iter/sec",
            "range": "stddev: 0.00003773977419462157",
            "extra": "mean: 2.9915755381694433 msec\nrounds: 262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19158.610453264595,
            "unit": "iter/sec",
            "range": "stddev: 0.000013687003014094089",
            "extra": "mean: 52.19585222213241 usec\nrounds: 6503"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 160.16034668420207,
            "unit": "iter/sec",
            "range": "stddev: 0.0006394137295940334",
            "extra": "mean: 6.2437427284779865 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 172.90126856606418,
            "unit": "iter/sec",
            "range": "stddev: 0.00007780338164979891",
            "extra": "mean: 5.783647559635504 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5169.193122614273,
            "unit": "iter/sec",
            "range": "stddev: 0.00004970409535329813",
            "extra": "mean: 193.45378984298017 usec\nrounds: 2284"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1468.0636105950703,
            "unit": "iter/sec",
            "range": "stddev: 0.0000045480080327814055",
            "extra": "mean: 681.1693940119231 usec\nrounds: 1269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 160.6102567337697,
            "unit": "iter/sec",
            "range": "stddev: 0.000645685554135905",
            "extra": "mean: 6.226252422082963 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 248.33482731955704,
            "unit": "iter/sec",
            "range": "stddev: 0.00019919962332986372",
            "extra": "mean: 4.026821412017255 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9705.034373839859,
            "unit": "iter/sec",
            "range": "stddev: 0.00001733710557391234",
            "extra": "mean: 103.03930532132095 usec\nrounds: 4867"
          }
        ]
      }
    ]
  }
}