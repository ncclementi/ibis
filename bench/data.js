window.BENCHMARK_DATA = {
  "lastUpdate": 1679999416784,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": false,
          "id": "19686bb185d578ad073d17a0a70b68eb0e422f12",
          "message": "chore(deps): pre-commit.ci autoupdate\n\nupdates:\n- [github.com/adrienverge/yamllint: v1.29.0 → v1.30.0](https://github.com/adrienverge/yamllint/compare/v1.29.0...v1.30.0)",
          "timestamp": "2023-03-28T05:59:15-04:00",
          "tree_id": "4cf4f724c0300bed2ee8fc9f98431ff173114cc2",
          "url": "https://github.com/ibis-project/ibis/commit/19686bb185d578ad073d17a0a70b68eb0e422f12"
        },
        "date": 1679999315943,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.49122336204943395,
            "unit": "iter/sec",
            "range": "stddev: 0.17550552327982843",
            "extra": "mean: 2.0357337970000002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 59489.295871043876,
            "unit": "iter/sec",
            "range": "stddev: 0.000018619302323064948",
            "extra": "mean: 16.809746784828647 usec\nrounds: 10730"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 214.83430364893294,
            "unit": "iter/sec",
            "range": "stddev: 0.0007979868590997505",
            "extra": "mean: 4.654750116788282 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9763.359960714872,
            "unit": "iter/sec",
            "range": "stddev: 0.00005423449267193817",
            "extra": "mean: 102.42375616834066 usec\nrounds: 1378"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 94.4599283508754,
            "unit": "iter/sec",
            "range": "stddev: 0.0009718600296595472",
            "extra": "mean: 10.586499666667729 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.09949433711479165,
            "unit": "iter/sec",
            "range": "stddev: 0.19189345975779493",
            "extra": "mean: 10.05082328300001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 76.12807248690277,
            "unit": "iter/sec",
            "range": "stddev: 0.001511824246328303",
            "extra": "mean: 13.135758824999044 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 422.4759420098471,
            "unit": "iter/sec",
            "range": "stddev: 0.0004694736835402011",
            "extra": "mean: 2.3669986869375204 msec\nrounds: 444"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 42.00788432911618,
            "unit": "iter/sec",
            "range": "stddev: 0.0022884969478627524",
            "extra": "mean: 23.80505507407541 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 203.46851670606537,
            "unit": "iter/sec",
            "range": "stddev: 0.0007207899069195542",
            "extra": "mean: 4.914765272725804 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 29.969329641632328,
            "unit": "iter/sec",
            "range": "stddev: 0.003076291016268902",
            "extra": "mean: 33.36744638461434 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5425769627454236,
            "unit": "iter/sec",
            "range": "stddev: 0.025582578788264202",
            "extra": "mean: 1.843056503799994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 20.173399893933603,
            "unit": "iter/sec",
            "range": "stddev: 0.003070663859774967",
            "extra": "mean: 49.570226399998774 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 208.72799238706688,
            "unit": "iter/sec",
            "range": "stddev: 0.0008019902384881657",
            "extra": "mean: 4.790924248174591 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 67.56087158523925,
            "unit": "iter/sec",
            "range": "stddev: 0.0014155143186931555",
            "extra": "mean: 14.801466833333166 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 137.44238541191433,
            "unit": "iter/sec",
            "range": "stddev: 0.001254105617539029",
            "extra": "mean: 7.275775933333837 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1637166.8510861152,
            "unit": "iter/sec",
            "range": "stddev: 0.000004361154930559218",
            "extra": "mean: 610.8112922861762 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3153.4151432896892,
            "unit": "iter/sec",
            "range": "stddev: 0.00018101739821030946",
            "extra": "mean: 317.1165084711254 usec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1543405.6728104386,
            "unit": "iter/sec",
            "range": "stddev: 0.000006241416577288792",
            "extra": "mean: 647.9177947940717 nsec\nrounds: 175439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4256.462156326066,
            "unit": "iter/sec",
            "range": "stddev: 0.00009180083823232255",
            "extra": "mean: 234.936894367491 usec\nrounds: 284"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 223.81927276143315,
            "unit": "iter/sec",
            "range": "stddev: 0.0005494019714557253",
            "extra": "mean: 4.467890488885158 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 381442.63958645595,
            "unit": "iter/sec",
            "range": "stddev: 0.00001069818236701618",
            "extra": "mean: 2.621626153500191 usec\nrounds: 1950"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 35.44662571163667,
            "unit": "iter/sec",
            "range": "stddev: 0.0027502029431923044",
            "extra": "mean: 28.211429999998927 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 236.71186340595924,
            "unit": "iter/sec",
            "range": "stddev: 0.0006952368836105225",
            "extra": "mean: 4.224545342220583 msec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.42705592501508,
            "unit": "iter/sec",
            "range": "stddev: 0.014091801947712921",
            "extra": "mean: 225.88375139999926 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 135.0957909530765,
            "unit": "iter/sec",
            "range": "stddev: 0.0037465037421536254",
            "extra": "mean: 7.402155114864645 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 76.97686148519232,
            "unit": "iter/sec",
            "range": "stddev: 0.001501211976842713",
            "extra": "mean: 12.990916759997617 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 101.69348265162091,
            "unit": "iter/sec",
            "range": "stddev: 0.0013045579417439927",
            "extra": "mean: 9.833471859998895 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 83.83130159182815,
            "unit": "iter/sec",
            "range": "stddev: 0.0014377987550103308",
            "extra": "mean: 11.928718521739853 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 56.045116623774305,
            "unit": "iter/sec",
            "range": "stddev: 0.0025248709587084575",
            "extra": "mean: 17.842767759997855 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 126.54094438539427,
            "unit": "iter/sec",
            "range": "stddev: 0.001248664948935996",
            "extra": "mean: 7.902580503543507 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 32.68018801985753,
            "unit": "iter/sec",
            "range": "stddev: 0.0021879374403757736",
            "extra": "mean: 30.599579151514302 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 559.9202175575427,
            "unit": "iter/sec",
            "range": "stddev: 0.0003714953855851212",
            "extra": "mean: 1.7859687302633083 msec\nrounds: 456"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5845108779299808,
            "unit": "iter/sec",
            "range": "stddev: 0.06816576534877584",
            "extra": "mean: 1.7108321466000007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 3987.155662199288,
            "unit": "iter/sec",
            "range": "stddev: 0.0001300046366353022",
            "extra": "mean: 250.80535718246995 usec\nrounds: 1789"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 94.74403999968914,
            "unit": "iter/sec",
            "range": "stddev: 0.0012257138288093784",
            "extra": "mean: 10.554753628864477 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 239.2091996118664,
            "unit": "iter/sec",
            "range": "stddev: 0.0005835193165308831",
            "extra": "mean: 4.180441227271232 msec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 98.60715508306201,
            "unit": "iter/sec",
            "range": "stddev: 0.0013959050031415593",
            "extra": "mean: 10.141251911766922 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3547.7825530789496,
            "unit": "iter/sec",
            "range": "stddev: 0.0001484958827003072",
            "extra": "mean: 281.8662037593449 usec\nrounds: 2341"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 97.21890942786766,
            "unit": "iter/sec",
            "range": "stddev: 0.0014023080862817015",
            "extra": "mean: 10.286064777778217 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1522899.2974282897,
            "unit": "iter/sec",
            "range": "stddev: 0.000007183935970920308",
            "extra": "mean: 656.6422360878973 nsec\nrounds: 106383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5316932392466102,
            "unit": "iter/sec",
            "range": "stddev: 0.04107703294031676",
            "extra": "mean: 1.8807837417999962 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 86.24972751379599,
            "unit": "iter/sec",
            "range": "stddev: 0.0011324231511187241",
            "extra": "mean: 11.594239527771796 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 138.26970730817936,
            "unit": "iter/sec",
            "range": "stddev: 0.000794533417258614",
            "extra": "mean: 7.2322421119412095 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 4287.412475061429,
            "unit": "iter/sec",
            "range": "stddev: 0.00009313921971008356",
            "extra": "mean: 233.2409129787943 usec\nrounds: 2011"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8756.062179428258,
            "unit": "iter/sec",
            "range": "stddev: 0.00009501324803383389",
            "extra": "mean: 114.20658961849637 usec\nrounds: 5953"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4764061.559577871,
            "unit": "iter/sec",
            "range": "stddev: 3.995857917180255e-7",
            "extra": "mean: 209.9049282832593 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 12.955430771478792,
            "unit": "iter/sec",
            "range": "stddev: 0.003575112038594072",
            "extra": "mean: 77.18770742857016 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.9965331176719163,
            "unit": "iter/sec",
            "range": "stddev: 0.014459749767158242",
            "extra": "mean: 500.86822560001565 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 242.04126982635304,
            "unit": "iter/sec",
            "range": "stddev: 0.00047827383617200526",
            "extra": "mean: 4.131526828947092 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.2117706963577541,
            "unit": "iter/sec",
            "range": "stddev: 0.017011275026363532",
            "extra": "mean: 825.2386387999991 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 38.461305030983524,
            "unit": "iter/sec",
            "range": "stddev: 0.0026180264979870083",
            "extra": "mean: 26.000157800012857 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1466399.6017062652,
            "unit": "iter/sec",
            "range": "stddev: 0.000005942412654144412",
            "extra": "mean: 681.9423565284834 nsec\nrounds: 102041"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 78.35542948953508,
            "unit": "iter/sec",
            "range": "stddev: 0.0013296455417172606",
            "extra": "mean: 12.762357459013826 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 8.305855034668326,
            "unit": "iter/sec",
            "range": "stddev: 0.008417835029811633",
            "extra": "mean: 120.39699655556684 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 103.11453241247239,
            "unit": "iter/sec",
            "range": "stddev: 0.0013151341156971152",
            "extra": "mean: 9.69795407692741 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 302.7645461500943,
            "unit": "iter/sec",
            "range": "stddev: 0.0005316721462492186",
            "extra": "mean: 3.3028966327657594 msec\nrounds: 177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6106374.315515882,
            "unit": "iter/sec",
            "range": "stddev: 2.9403962049186547e-7",
            "extra": "mean: 163.76329853532206 nsec\nrounds: 72993"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 146111.1909565213,
            "unit": "iter/sec",
            "range": "stddev: 0.00002182776598918483",
            "extra": "mean: 6.844102723778171 usec\nrounds: 36496"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 83.73966009592318,
            "unit": "iter/sec",
            "range": "stddev: 0.0013537200667975572",
            "extra": "mean: 11.941772857144477 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 69.18733726687836,
            "unit": "iter/sec",
            "range": "stddev: 0.023179476695169402",
            "extra": "mean: 14.453511863632944 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 86.75128396650902,
            "unit": "iter/sec",
            "range": "stddev: 0.001591485887170751",
            "extra": "mean: 11.527206910113946 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 216.29136679866053,
            "unit": "iter/sec",
            "range": "stddev: 0.0006007365952460163",
            "extra": "mean: 4.6233930406056 msec\nrounds: 197"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 92.96178751133785,
            "unit": "iter/sec",
            "range": "stddev: 0.0009639561293088443",
            "extra": "mean: 10.757108127659848 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1456.0415958846982,
            "unit": "iter/sec",
            "range": "stddev: 0.00025873342608902705",
            "extra": "mean: 686.7935660810534 usec\nrounds: 1309"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 11027.595885404031,
            "unit": "iter/sec",
            "range": "stddev: 0.00006534375646443214",
            "extra": "mean: 90.68159645962234 usec\nrounds: 5593"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6263.086156826932,
            "unit": "iter/sec",
            "range": "stddev: 0.00009826708815287195",
            "extra": "mean: 159.665694349418 usec\nrounds: 3504"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 3841.912388240188,
            "unit": "iter/sec",
            "range": "stddev: 0.0001648615384839722",
            "extra": "mean: 260.28703909566667 usec\nrounds: 2123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10114076.595386673,
            "unit": "iter/sec",
            "range": "stddev: 1.338406533092533e-7",
            "extra": "mean: 98.87210073692714 nsec\nrounds: 91744"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 222.1713205962813,
            "unit": "iter/sec",
            "range": "stddev: 0.0008964994960873772",
            "extra": "mean: 4.501030994082041 msec\nrounds: 169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 231.754370411969,
            "unit": "iter/sec",
            "range": "stddev: 0.000635176024854957",
            "extra": "mean: 4.31491323431092 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 92.07320279622698,
            "unit": "iter/sec",
            "range": "stddev: 0.002089993284759781",
            "extra": "mean: 10.86092336999684 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 89.22948193224845,
            "unit": "iter/sec",
            "range": "stddev: 0.002032612554679425",
            "extra": "mean: 11.207058231709736 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 981.8884087092412,
            "unit": "iter/sec",
            "range": "stddev: 0.00019453091726032973",
            "extra": "mean: 1.0184456717587365 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 45.29001205305253,
            "unit": "iter/sec",
            "range": "stddev: 0.03285468299632253",
            "extra": "mean: 22.079923468083962 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4172.58130397281,
            "unit": "iter/sec",
            "range": "stddev: 0.00010300609273329856",
            "extra": "mean: 239.65979980974302 usec\nrounds: 2108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 182.57274028834817,
            "unit": "iter/sec",
            "range": "stddev: 0.003952457074121683",
            "extra": "mean: 5.477268941796237 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 3991.5862690571566,
            "unit": "iter/sec",
            "range": "stddev: 0.00018903136519699047",
            "extra": "mean: 250.52696662277265 usec\nrounds: 2277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3736.7960050083366,
            "unit": "iter/sec",
            "range": "stddev: 0.00017345110045036445",
            "extra": "mean: 267.6089352107325 usec\nrounds: 3195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 109.47553101453747,
            "unit": "iter/sec",
            "range": "stddev: 0.0011511889266757277",
            "extra": "mean: 9.1344612876754 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 83.34334859512633,
            "unit": "iter/sec",
            "range": "stddev: 0.0016005673400628815",
            "extra": "mean: 11.99855797560883 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 95.15242364221915,
            "unit": "iter/sec",
            "range": "stddev: 0.0010218900044398499",
            "extra": "mean: 10.5094537976256 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 692252.5986677548,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019643979734319838",
            "extra": "mean: 1.4445594020513715 usec\nrounds: 22272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 122.14123386839184,
            "unit": "iter/sec",
            "range": "stddev: 0.0012263926958543234",
            "extra": "mean: 8.187243311112349 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 92.15461332407219,
            "unit": "iter/sec",
            "range": "stddev: 0.0016655893735350897",
            "extra": "mean: 10.851328695649629 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4864994.244897865,
            "unit": "iter/sec",
            "range": "stddev: 7.189651081004986e-7",
            "extra": "mean: 205.55008899533317 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 57.33052749851041,
            "unit": "iter/sec",
            "range": "stddev: 0.0007631093918377095",
            "extra": "mean: 17.442714093743206 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 591.9898460001882,
            "unit": "iter/sec",
            "range": "stddev: 0.0005335539313881391",
            "extra": "mean: 1.6892181627042335 msec\nrounds: 547"
          }
        ]
      }
    ]
  }
}